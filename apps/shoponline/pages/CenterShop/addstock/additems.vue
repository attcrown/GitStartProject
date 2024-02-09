<template>
    <div>
        <div class="container mt-3 fontsProAddItem">
            <v-data-table :headers="headers" :items="Object.values(desserts)" sort-by="SqlNo" class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat class="text-h5">
                        <div>Products</div>
                        <v-spacer></v-spacer>
                        <div>
                            <v-btn @click="dialog = true,
                                formTitle = true,
                                editedItem = {}" color="primary">Add items</v-btn>
                        </div>
                    </v-toolbar>
                </template>

                <template v-slot:item.actions="{ item ,index}">
                    <v-icon small class="mr-2" @click="editItem(item , Object.keys(desserts)[index]), formTitle = false">
                        mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(Object.keys(desserts)[index])">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </div>


        <v-dialog v-model="dialog" max-width="600">
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ formTitle ? 'Add Item' : 'Edit Item' }}</span>
                    <v-spacer></v-spacer>
                    <v-btn fab dark small color="#37474F" @click="dialog = false, editedItem = {}">
                        <v-icon dark class="text-h5">
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.unit" label="Unit"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-select :items="select_types" v-model="editedItem.type" label="Types"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="12" class="d-flex justify-end">
                            <v-btn v-if="!formTitle" color="success" @click="saveEdit()"> Save Edit</v-btn>
                            <v-btn v-else color="success" @click="saveAdd()"> Save Add </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>


        <v-dialog v-model="dialogDelete" max-width="300">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Delete</span>
                    <v-spacer></v-spacer>
                    <v-btn fab dark small color="#37474F" @click="dialogDelete = false ,key_edit = undefined">
                        <v-icon dark class="text-h5">
                            mdi-close
                        </v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-btn color="error" @click="deleteConfirm()">Confirm Delete</v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { TYPE_ELECTRONIC, TYPE_FOOD, TYPE_TOOL } from '~/services/const';
export default {
    data() {
        return {
            formTitle: false,
            dialog: false,
            dialogDelete: false,
            property: 'value',
            headers: [
                {
                    text: 'No',
                    align: 'start',
                    sortable: true,
                    value: 'SqlNo',
                },
                { text: 'Name', value: 'name' },
                { text: 'Unit', value: 'unit' },
                { text: 'Type', value: 'type' },
                { text: 'Price', value: 'price' },
                { text: '', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedItem: {},
            select_types: [
                TYPE_ELECTRONIC,
                TYPE_FOOD,
                TYPE_TOOL
            ],
            key_edit: undefined,
        };
    },
    async mounted() {
        this.search_item()
    },

    methods: {
        search_item() {
            const db = this.$fireModule.database();
            db.ref(`develop/Product_Items`).on("value",(snapshot)=>{     
                if(snapshot.val() === null) return   
                this.desserts = snapshot.val();
            })
        },
        editItem(item ,key) {
            this.ket_edit = key;
            this.editedItem = item;
            this.dialog = true;
        },
        deleteItem(item) {
            this.key_edit = item;
            this.dialogDelete = true;
        },
        deleteConfirm(){
            const db = this.$fireModule.database();
            db.ref(`develop/Product_Items/${this.key_edit}`).remove();
            this.key_edit = undefined;
            this.editedItem = {};
            this.dialogDelete = false;
        },
        saveEdit() {            
            if(!this.key_edit) {
                this.dialog = false; 
                return
            }
            const db = this.$fireModule.database();
            db.ref(`develop/Product_Items/${this.key_edit}`).update(this.editedItem);
            this.editedItem = {};
            this.key_edit = undefined;
            this.dialog = false;
        },
        saveAdd() {
            this.editedItem.SqlNo = Object.values(this.desserts).length + 1;
            const db = this.$fireModule.database();
            db.ref(`develop/Product_Items`).push(this.editedItem)
            this.dialog = false;
            this.editedItem = {};
        }
    },
}
</script>
<style>
.fontsProAddItem {
    font-family: 'Prompt', sans-serif;
    font-weight: 300;
}
</style>
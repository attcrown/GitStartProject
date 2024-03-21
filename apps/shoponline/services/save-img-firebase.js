export async function saveImgFirebase(firebase , files , uid ,path) {
    console.log(firebase , files , uid)
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(path);
    
    // บันทึกรูป
    await imageRef.put(files);
    
    // get link img
    const downloadURL = await imageRef.getDownloadURL();
    
    // update auth
    const user = firebase.auth().currentUser;
    await user.updateProfile({ photoURL: downloadURL });

    return downloadURL
}
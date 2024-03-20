export async function saveImgFirebase(firebase , files , uid) {
    console.log(firebase , files , uid)
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`user/${uid}/avatar.jpg`);
    
    // บันทึกรูป
    await imageRef.put(files);
    
    // get link img
    const downloadURL = await imageRef.getDownloadURL();
    
    // update auth
    const user = firebase.auth().currentUser;
    await user.updateProfile({ photoURL: downloadURL });

    return downloadURL
}
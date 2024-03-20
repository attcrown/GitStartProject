export async function processImg(files) {
    return new Promise((resolve, reject) => {
        const file = files;
        if (!file) {
            reject("No file provided");
            return;
        }

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function (event) {
            const imgElement = document.createElement("img");
            imgElement.src = event.target.result;

            imgElement.onload = function (e) {
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 300;

                const scaleSize = MAX_WIDTH / e.target.width;
                canvas.width = MAX_WIDTH;
                canvas.height = e.target.height * scaleSize;

                const ctx = canvas.getContext("2d");

                ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

                canvas.toBlob((blob) => {
                    resolve(blob);
                }, "image/jpeg", 0.7); // 0.7 คือคุณภาพของรูป
            };
        };
    });
}

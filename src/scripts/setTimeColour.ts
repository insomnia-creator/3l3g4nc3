class PredominantColour
{
    constructor(public blob: Blob){}



    getBitmapImage(){
        return createImageBitmap(this.blob);
    }


    rgbToHex(r:number, g:number, b:number){
        const hex = ((r << 16) | (g << 8) | b).toString(16);

        return "#" + new Array(Math.abs(hex.length - 7)).join("0") + hex;
    }

    //a very descriptive function indeed
    async getBackgroundImageColourBasedOnElementLocation() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d")!;
        const image = await this.getBitmapImage();


        let data;
        let rgb = {
            r: 0,
            g: 0,
            b: 0
        };
        let count = 0;
        let bs = 5;
        ctx.drawImage(image, 0, 0);
        try {
            data = ctx.getImageData(0, 0, ctx.canvas.height, ctx.canvas.width);
        } catch(e) {
            alert('Your browser does not support getImageData');
            window.close();
            return;
        }
        length = data.data.length;
        let i = -4;
        while ( (i += bs * 4) < length ) {
            count++;
            rgb.r += data.data[i];
            rgb.g += data.data[i+1];
            rgb.b += data.data[i+2];
        }
        rgb.r = Math.floor(rgb.r/count);
        rgb.g = Math.floor(rgb.g/count);
        rgb.b = Math.floor(rgb.b/count);
        const mainElement = document.querySelector('main')!;
        mainElement.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        return this.checkDarkness(rgb);
    }

    checkDarkness(rgb: {r: number, g: number, b: number})
    {
        let index = 1 - (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        if(index === 0) return '#d0d0d0'
        if(index > 0.6){
            return '#fff';
        } else if(index < 0.6){
            return '#000';
        } else {
            return '#d0d0d0';
        }

    }

    async setColour(){
        const timeElement = document.getElementById('time')!;

        timeElement.style.color = (await this.getBackgroundImageColourBasedOnElementLocation())!;

    }
}
export default PredominantColour;
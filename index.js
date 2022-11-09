// case 1 : tampilkanlah tanggal bulan dan tahun hari ini, besok dan kemarin

const today = new Date(); //2022-11-09T05:52:56.256Z "today" 

let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1) //2022-11-10T05:59:10.090Z "tomorrow"

function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1); //2022-11-08T06:04:41.742Z "yesterday"

    return previous;
}

console.log(tomorrow()); 



// case 2 : Umur seorang ayah adalah empat kali umur anaknya. Jika jumlah umur ayah dan anak saat itu adalah 80 tahun, berapakah umur si anak

const totalAge = 80;
const father = 4;
const son = 1;

const total = father + son;
const sonAge = totalAge / total

console.log(sonAge);



// case 3 : Buatlah algoritma untuk menghitung jumlah karakter tertentu dalam string

const name = 'syahrul ramadhan';
const checkLength = name.length;

console.log(checkLength);



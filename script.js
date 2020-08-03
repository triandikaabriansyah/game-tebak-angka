// Main lagi
var lagi = true;
while(lagi){
	// menangkap pilihan player 
alert('Tebak angka dari 1 - 10 \nAnda memiliki 3 kesempatan');
var p = prompt('Masukkan angka tebakan');
// menangkap pilihan computer / jawaban
var comp = Math.round(Math.random() * 10);

// menentukan rules
var hasil = '';

if (p == comp){
	hasil = 'Tebakan anda benar';
}
else if(p < comp){
	alert('Tebakan terlalu rendah');
	for (var i = 0 ; i < 3; i++) {
		var p = prompt('Masukkan angka tebakan');
		var hasil = '';
		if (p == comp) {
			hasil = 'Tebakan anda benar';
			alert(hasil);
			break;
		}
		else if (p < comp) {
			hasil = 'Tebakan terlalu rendah';
		}
		else if(p > comp){
			hasil = 'Tebakan terlalu tinggi';
		}
		alert('Kamu memilih '+ p +' '+ hasil);
	}
	if(p != comp){
		alert('Kesempatan anda habis');
	}	
}
else if(p > comp){
	alert('Tebakan terlalu tinggi');
	for (var i = 0 ; i < 2; i++) {
		var p = prompt('Masukkan angka tebakan');
		console.log(comp);
		if (p == comp) {
			hasil = 'Tebakan anda benar';
			alert(hasil);
			break;
		}
		else if (p < comp) {
			hasil = 'Tebakan terlalu rendah';
		}
		else if(p > comp){
			hasil = 'Tebakan terlalu tinggi';
		}
		alert('Kamu memilih '+ p +' '+ hasil);
	}
	if(p != comp){
		alert('Kesempatan anda habis');	
	}	
}
// tampilkan hasilnya
if (p == comp) {
	alert('Kamu memilih '+ p +' '+ hasil);
}
else if(p != comp){
	alert('Jawaban yang benar '+ comp);
}
lagi = confirm('Mau Main Lagi ?');
}














function displayBmi(a, b, c){
  if (a == 0 || b == 0) {
      alert("Anda belum memasukkan berat badan atau tinggi badan");
    }else{
      const displayContentBmi = document.getElementById('display-content-bmi');
      const displayContentBbi = document.getElementById('display-content-bbi');
      const displayContentAboutBmi = document.getElementById('display-content-aboutBmi');
      const tbbb = document.getElementById('tbbb');

      let bmiContent = "";
      let bbiContent = "";
      let aboutBmiContent = "";
      let isiTbBB = "";

      let tbs = a.split("");
      let tbsg = tbs[0] + "." + tbs[1]  + tbs[2];
      let tb = tbsg ** 2;
      let tbf = tb.toFixed(2);
      let hasil = b / tbf;
      let hasilf = hasil.toFixed(1);

      if(hasilf < 18.5){
        document.getElementById('display-content-bbi-none').classList.remove("d-none");
        isiTbBB = `<p>Jika Tinggi Badan anda <b>${a} Cm</b> dan Berat Badan <b>${b} Kg</b> maka : </p>`;
        bmiContent = `<div class="card bg-info">`+
                        `<div class="card-header">BMI anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${hasilf}</h1>`+
                          `<p class="card-text">Underweight</p>`+
                      `</div>`+
                     `</div>`;
        bbiContent = `<div class="card bg-light">`+
                        `<div class="card-header">BBI untuk anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${c} Kg</h1>`+
                        `</div>`+
                     `</div>`;
        aboutBmiContent = `<p>Anda dapat dikatakan memiliki berat badan kurang atau underweight karena angka BMI Anda kurang dari angka 18,5. Berat badan kurang bukanlah kondisi yang sehat.</p>`+
                          `<p>Kondisi ini dapat meningkatkan risiko Anda untuk mengalami beberapa masalah kesehatan, seperti sistem kekebalan tubuh lemah, tulang menjadi rapuh, sulit memperoleh keturunan atau infertilitas, hingga kurang gizi.</p>`+
                          `<p>Kami merekomendasikan anda untuk menaikkan berat badan Anda hingga ${c} Kg.</p>`+
                          `<p>Untuk meningkatkan berat badan agar lebih ideal, Anda perlu menyiasatinya dengan pola makan sehat yang terdiri dari makanan dengan kandungan nutrisi lengkap, seperti karbohidrat, protein, lemak sehat, serta aneka vitamin dan mineral.</p>`+
                          `<p>Anda bisa memenuhi asupan nutrisi tersebut dengan mengonsumsi nasi, buah, sayuran, ikan, telur, kacang-kacangan, dan susu.</p>`+
                          `<a href="https://www.alodokter.com/memahami-kalkulator-berat-badan-ideal" target="_blank">Baca selangkapnya di sini</a>`;
        tbbb.innerHTML = isiTbBB;
        displayContentBmi.innerHTML = bmiContent;
        displayContentBbi.innerHTML = bbiContent;
        displayContentAboutBmi.innerHTML = aboutBmiContent;
      }else if(hasilf <= 25){
        isiTbBB = `<p>Jika Tinggi Badan anda <b>${a} Cm</b> dan Berat Badan <b>${b} Kg</b> maka : </p>`;
        bmiContent = `<div class="card bg-success">`+
                        `<div class="card-header">BMI anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${hasilf}</h1>`+
                          `<p class="card-text">Normal</p>`+
                      `</div>`+
                     `</div>`;
        aboutBmiContent =`<p>Nilai BMI Anda termasuk pada rentang angka yang disebut berat badan normal atau ideal. Namun, memiliki berat badan ideal bukan berarti Anda bebas melakukan apa pun.</p>`+
                          `<p>Anda tetap dianjurkan untuk menjaga berat badan dan kesehatan tubuh secara keseluruhan dengan mengonsumsi makanan bernutrisi, mencukupi waktu istirahat, melakukan olahraga secara rutin, serta menghindari kebiasaan buruk, seperti merokok atau mengonsumsi minuman beralkohol.</p>`+
                          `<a href="https://www.alodokter.com/memahami-kalkulator-berat-badan-ideal" target="_blank">Baca selangkapnya di sini</a>`;
        tbbb.innerHTML = isiTbBB;
        displayContentBmi.innerHTML = bmiContent;
        document.getElementById('display-content-bbi-none').classList.add("d-none");
        displayContentAboutBmi.innerHTML = aboutBmiContent;
      }else if(hasilf <= 27){
        isiTbBB = `<p>Jika Tinggi Badan anda <b>${a} Cm</b> dan Berat Badan <b>${b} Kg</b> maka : </p>`;
        document.getElementById('display-content-bbi-none').classList.remove("d-none");
        bmiContent = `<div class="card bg-warning">`+
                        `<div class="card-header">BMI anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${hasilf}</h1>`+
                          `<p class="card-text">Overweight</p>`+
                      `</div>`+
                     `</div>`;
        bbiContent = `<div class="card bg-light">`+
                        `<div class="card-header">BBI untuk anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${c} Kg</h1>`+
                        `</div>`+
                     `</div>`;
        aboutBmiContent = `<p>Bila hasil perhitungan BMI Anda menunjukkan nilai antara 25,1 – 27,0, berarti Anda memiliki berat badan berlebih atau overweight.</p>`+
                          `<p>Kondisi ini juga tidak baik bagi kesehatan karena dapat meningkatkan risiko berbagai penyakit, seperti stroke, diabetes tipe 2, osteoarthritis, dan hipertensi. Sebagai upaya pencegahan, Anda disarankan mengambil langkah untuk mengurangi berat badan.</p>`+
                          `<p>Hal ini bisa dilakukan dengan cara mengurangi asupan makanan yang mengandung gula atau karbohidrat dan kolesterol. Kedua jenis makanan tersebut dapat menyebabkan tubuh menghasilkan banyak jaringan lemak yang dapat memicu peningkatan berat badan.</p>`+
                          `<p>Kami merekomendasikan anda untuk menurunkan berat badan Anda hingga ${c} Kg.</p>`+
                          `<p>Untuk menurunkan berat badan, cobalah mulai memperbanyak asupan protein, seperti ikan, telur, tahu, dan tempe, buah dan sayur, serta dianjurkan untuk minum air 30 menit sebelum makan agar Anda merasa lebih cepat kenyang. Jangan lupa juga untuk rutin berolahraga minimal 20–30 menit setiap hari atau minimal 3 kali seminggu.</p>`+
                          `<a href="https://www.alodokter.com/memahami-kalkulator-berat-badan-ideal" target="_blank">Baca selangkapnya di sini</a>`;
        tbbb.innerHTML = isiTbBB;
        displayContentBmi.innerHTML = bmiContent;
        displayContentBbi.innerHTML = bbiContent;
        displayContentAboutBmi.innerHTML = aboutBmiContent;
      }else if(hasilf > 27){
        isiTbBB = `<p>Jika Tinggi Badan anda <b>${a} Cm</b> dan Berat Badan <b>${b} Kg</b> maka : </p>`;
        document.getElementById('display-content-bbi-none').classList.remove("d-none");
        bmiContent = `<div class="card bg-danger">`+
                        `<div class="card-header">BMI anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${hasilf}</h1>`+
                          `<p class="card-text">Obesitas</p>`+
                      `</div>`+
                     `</div>`;
        bbiContent = `<div class="card bg-light">`+
                        `<div class="card-header">BBI untuk anda : </div>`+
                        `<div class="card-body">`+
                          `<h1 class="card-title">${c} Kg</h1>`+
                        `</div>`+
                     `</div>`;
        aboutBmiContent = `<p>Jika hasil perhitungan BMI Anda menunjukkan angka di atas 27, berarti Anda sudah mengalami obesitas.</p>`+
                          `<p>Obesitas adalah kondisi ketika Anda memiliki jumlah lemak yang berlebih di dalam tubuh. Kondisi ini tidak baik untuk kesehatan karena dapat meningkatkan risiko penyakit jantung, diabetes, stroke, dan tekanan darah tinggi.</p>`+
                          `<p>Kami merekomendasikan anda untuk menurunkan berat badan Anda hingga ${c} Kg.</p>`+
                          `<p>Untuk mengatasinya, Anda disarankan untuk mengurangi jumlah kalori yang masuk ke dalam tubuh dengan mengonsumsi makanan yang lebih sehat, seperti sayuran dan buah-buahan, serta berolahraga secara rutin.</p>`+
                          `<p>Jika perlu, Anda bisa berkonsultasi dengan dokter untuk memulai program pengurangan berat badan untuk memperoleh berat badan ideal.</p>`+
                          `<a href="https://www.alodokter.com/memahami-kalkulator-berat-badan-ideal" target="_blank">Baca selangkapnya di sini</a>`;
        tbbb.innerHTML = isiTbBB;
        displayContentBmi.innerHTML = bmiContent;
        displayContentBbi.innerHTML = bbiContent;
        displayContentAboutBmi.innerHTML = aboutBmiContent;
      }
    }
}
function displayBbi(w, x, y){
  if(x == "pria"){
    let a = y - 100;
    let b = a * 10 / 100;
    let hasil = a - b;
    let hasilp = Math.floor(hasil);
    
    displayBmi(y, w, hasilp);
  }else if(x == "wanita"){
    let a = y - 100;
    let b = a * 15 / 100;
    let hasil = a - b;
    hasilp = Math.floor(hasil);
    
    displayBmi(y, w, hasilp);
  }else{
    alert("Anda belum memilih Jenis kelamin");
  }
}
function bmi() {
  const form = document.getElementById('bmiForm');
  const jk = document.getElementById('jenis-kelamin').value;
  const tb = document.getElementById('tinggi-badan').value;
  const bb = document.getElementById('berat-badan').value;

  displayBbi(bb, jk, tb);
  form.reset();
}
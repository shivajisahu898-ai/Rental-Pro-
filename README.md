<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rental Pro - Heavy Vehicles On Rent</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial}
body{background:#f4f6f9}
.header{background:#0a2a5a;color:#fff;padding:20px;text-align:center}
.header h1{font-size:28px} .header span{color:#ff6a00}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;padding:20px}
.card{background:#fff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);overflow:hidden;text-align:center;padding-bottom:15px}
.card img{width:100%;height:180px;object-fit:contain;background:#fff}
.card h3{margin:10px 0;color:#0a2a5a}
.card p{color:green;font-weight:bold}
.card button{background:#ff6a00;color:#fff;border:none;padding:10px 20px;border-radius:20px;cursor:pointer;margin-top:10px}
.card button:hover{background:#0a2a5a}
.footer{background:#0a2a5a;color:#fff;text-align:center;padding:15px;margin-top:20px}
</style>
</head>
<body>
<div class="header">
<h1>RENTAL <span>PRO</span></h1>
<p>JCB | Tractor | Road Roller | Tipper | All Heavy Vehicles On Rent</p>
</div>

<div class="grid">
  <div class="card"><img src="https://i.imgur.com/8Km9tLL.png"><h3>JCB 3DX Backhoe</h3><p>₹1200 / Hour</p><button onclick="book('JCB')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/Q7p7e5a.png"><h3>Farm Tractor</h3><p>₹800 / Hour</p><button onclick="book('Tractor')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/4AiXzf8.png"><h3>Road Roller</h3><p>₹1000 / Hour</p><button onclick="book('Road Roller')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/8w2Z2yN.png"><h3>Track Excavator</h3><p>₹1500 / Hour</p><button onclick="book('Track Excavator')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/L0e2r1A.png"><h3>Tipper / Dumper</h3><p>₹2000 / Day</p><button onclick="book('Tipper')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/Y3v4H1a.png"><h3>Bulldozer</h3><p>₹1800 / Hour</p><button onclick="book('Bulldozer')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/5T2X8vA.png"><h3>Mobile Crane</h3><p>₹2500 / Hour</p><button onclick="book('Crane')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/8x4s5zA.png"><h3>Wheel Loader</h3><p>₹1300 / Hour</p><button onclick="book('Loader')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/2x4s5zA.png"><h3>Motor Grader</h3><p>₹1400 / Hour</p><button onclick="book('Grader')">Book Now</button></div>
  <div class="card"><img src="https://i.imgur.com/9x4s5zA.png"><h3>Concrete Mixer</h3><p>₹1800 / Day</p><button onclick="book('Mixer')">Book Now</button></div>
</div>

<div class="footer">© 2026 Rental Pro | Call: +91 9XXXXXXXXX | Scan QR to Download App</div>

<script>
function book(name){
  let phone = "919999999999"; // <-- Yahan apna WhatsApp number dalo
  let msg = `Hello Rental Pro, Mujhe ${name} rent pe chahiye.`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,"_blank");
}
</script>
</body>
</html>

function sendWhatsApp(){
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!name || !mobile || !message){
    alert("Please fill all fields");
    return;
  }

  // 🔴 Replace with YOUR WhatsApp number (country code ke saath)
  const ADMIN_WHATSAPP = "919999999999";

  const text =
    `Name: ${name}%0A` +
    `Mobile: ${mobile}%0A` +
    `Message: ${message}`;

  const url = `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
  window.open(url, "_blank");
}
export async function sendMessage(message, userData) {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('name', userData.name);
  formData.append('age', userData.age);
  formData.append('relationship', userData.relationship);
  formData.append('photo', userData.photo);

  const res = await fetch('https://silent-talks-backend.onrender.com/api/chat', {
    method: 'POST',
    body: formData
  });

  const data = await res.json();
  return data.reply;
}
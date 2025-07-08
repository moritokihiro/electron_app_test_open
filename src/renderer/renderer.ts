window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('load-users');
  btn?.addEventListener('click', async () => {
    const users = await (window as any).api.getUsers();
    console.log(users);
  });
});

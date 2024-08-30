function showDetails(model) {
    const models = document.querySelectorAll('.model');
    models.forEach((m) => {
        m.classList.add('hidden');
    });

    document.getElementById(model).classList.remove('hidden');
}

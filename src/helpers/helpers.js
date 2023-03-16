export function changeTheme(currentTheme) {
    const currentBGClass = currentTheme === 'light' ? 'bg-light' : 'bg-dark';
    const inactiveBgClass = currentTheme === 'light' ? 'bg-dark' : 'bg-light';
    const currentTextClass = currentTheme === 'light' ? 'text-dark' : 'text-light';
    const inactiveTextClass = currentTheme === 'light' ? 'text-light' : 'text-dark';

    document.body.classList.remove(inactiveBgClass);
    document.body.classList.add(currentBGClass);

    document.querySelector(".form-control").classList.remove(inactiveBgClass);
    document.querySelector(".form-control").classList.remove(inactiveTextClass);
    document.querySelector(".form-control").classList.add(currentBGClass);
    document.querySelector(".form-control").classList.add(currentTextClass);

    document.querySelector(".form-label").classList.remove(inactiveTextClass);
    document.querySelector(".form-label").classList.add(currentTextClass);

    document.querySelector(".todoLabel").classList.remove(inactiveTextClass);
    document.querySelector(".todoLabel").classList.add(currentTextClass);

}
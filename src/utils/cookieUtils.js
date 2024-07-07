
export function setCookie(name, value,days, path, sameSite = 'lax'){
    let expires = '';
    if(days){
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 *60 * 100));
        expires = "; expires="+date.toUTCString();
    }
    const sameSiteAttribute = "; SameSite=" + sameSite;
    document.cookie = name + "="+(value || "") + expires+ "; path="+path+ sameSiteAttribute
}
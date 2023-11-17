export const toBase64 = function(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        if(file != null)
            reader.readAsDataURL(file);
        
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
};
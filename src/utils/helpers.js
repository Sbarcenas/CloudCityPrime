export const downloadLink = res => {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = res.link;
    a.download = "true";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(res.link);
};

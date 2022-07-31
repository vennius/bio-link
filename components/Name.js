export default function Name({name}){
  return (
  
    <div style={{
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.5em",
      letterSpacing: 1
    }} onClick={(e) => {
      navigator.permissions.query({name: "clipboard-write"})
    .then(({state}) => {
        console.log(`permission response: ${state}`);
        if (state === "granted") {
            const data = [new ClipboardItem({ "text/plain": new Blob([name], { type: "text/plain" }) })]
            navigator.clipboard.write(data).then(
                () => {
                    alert("Name copied!");
                },
                () => {
                    alert("Name not copied, something went wrong!");
                }
            );
        }
    });
    }}>@{name}</div>
  
  );
}
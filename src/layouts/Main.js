import React from "react";

function Main({ children }) {
  return (
    <div>
      <header>Esto es un header para home</header>
      <section>{children}</section>
      <footer>Esto es un footer para home</footer>
    </div>
  );
}

export default Main;

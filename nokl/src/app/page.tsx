// import Image from "next/image";

export default function Home() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <>
        <div>
          LOGGED IN
        </div>
      </>
        
    );
  } else {
    return (
      <>
        <div>
          PLEASE LOG IN
        </div>
      </>
    )
  }
}

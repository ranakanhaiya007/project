import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };
  const { email, firstName, lastName } = JSON.parse(localStorage.getItem("user"));
  console.log(email, firstName, lastName);
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Kanhaiya's Project</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1>Email is: {email}</h1>
      <h1>FirstName is: {firstName}</h1>
      <h1>LastName is: {lastName}</h1>
    </div>
  );
};

export default Main;

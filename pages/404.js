export default function notFound() {
  const styles = {
    center: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }

  return (
    <div style={styles.center}>
      <div>Opps, Halaman tidak ditemukan !</div>
    </div>
  )
}
export default function ArchieveLayout({ archieve, latest }) {
  return (
    <div>
      <h1>News Archieve</h1>
      <section>{archieve}</section>
      <hr />
      <section>{latest}</section>
    </div>
  );
}

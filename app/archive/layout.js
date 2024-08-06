export default function ArchiveLayout({ archive, latest }) {
  return (
    <div>
      <h1>News Archive</h1>
      <section>{archive}</section>
      <hr />
      <section>{latest}</section>
    </div>
  );
}

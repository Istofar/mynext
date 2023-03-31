import Link from "next/link";
const EventsPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {" "}
        <Link href="">
          <h2>Events In London</h2>
        </Link>
        <Link href="">
          <h2>Events In Paris</h2>
        </Link>
        <Link href="">
          <h2>Events In Japan</h2>
        </Link>
      </div>
    </div>
  );
};

export default EventsPage;

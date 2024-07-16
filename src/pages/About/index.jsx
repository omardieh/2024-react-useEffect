export default function About({ aboutUs, ourMission }) {
  return (
    <div>
      <div>
        <b>about us:</b>
        <p> {aboutUs} </p>
      </div>
      <div>
        <b>our mission:</b>
        <p> {ourMission} </p>
      </div>
    </div>
  );
}

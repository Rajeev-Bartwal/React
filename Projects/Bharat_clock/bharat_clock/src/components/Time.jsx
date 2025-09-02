function BharatTime(){
  let date = new Date().getDate();
  let time = new Date().toLocaleTimeString();
  return <p className="time">This is current date: {date} Time: {time}</p>
}
export default BharatTime;
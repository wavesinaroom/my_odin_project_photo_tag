const Record = ({record}) =>{
  return(
    <>
      <tr>
        <td>{record.username}</td>
        <td>{record.time}</td>
      </tr>
    </>
  )
}

export default Record;

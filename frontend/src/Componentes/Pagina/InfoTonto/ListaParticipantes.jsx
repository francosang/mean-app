import ListaTitulos from "./ListaTitulos";
import { useNombres } from "../../Api/Api.JS";

const ListaParticipantes = () => {
  const { users } = useNombres();
  return (

      {users.map((user, index) => (
       <div className="ListaParticipantes">
        <ol className="list-group list-group-numbered" key={index}>
          <li className="list-group-item d-flex justify-content-between align-items-start"
            key={user.name}
          >
            <div className="logros ms-2 me-auto">
              <div className="nombre fw-bold">{user.name}</div>
              <ListaTitulos />
            </div>
            <span className="badge">88</span>
          </li>
        </ol>
       </div>
      ))}
  );
};

export default ListaParticipantes;

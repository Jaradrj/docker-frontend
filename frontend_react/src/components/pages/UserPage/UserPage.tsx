import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../../types/models/User.model";
import UserService from "../../../Services/UserService";
import UserForm from "../../molecules/UserForm/UserForm";
import { useEffect, useState } from "react";

const UserPage = () => {
  const navigate = useNavigate();
  const { previousPage, userId } = useParams();
  const [user, setUser] = useState<User>({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    roles: [],
  });

  useEffect(() => {
    return () => {
      if (userId) {
        UserService.getUser(userId).then((res) => {
          return setUser(res);
        });
      }
    };
  }, [userId]);

  const submitActionHandler = (values: User) => {
    if (userId !== undefined) {
      UserService.updateUser(values).then(() => {
                navigate(("../" + previousPage) as string);
      });
    } else {
      UserService.addUser(values).then(() => {
                navigate(("/" + previousPage) as string);
      });
    }
  };

  return (
    <UserForm
      user={user}
      submitActionHandler={submitActionHandler}
      previousPage={previousPage as string}
    />
  );
};
export default UserPage;

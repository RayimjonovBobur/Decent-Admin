import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/5224471.png";
import { Logo } from "../../assets/images/Iocns";
import { setUser } from "../Redux/stored_reducer";
import "./Login.scss";

const Login = () => {
  const user = useSelector((s) => s?.users_reducer?.user);
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState({});

  const handleChange = (e) => {
    setIsUser(e);
  };

  const handleSubmit = () => {
    dispatch(setUser({ ...user, ...isUser }));
  };
  return (
    <div className="login">
      <div className="loginContent">
        <div className="imgContent">
          <img src={loginImg} alt="" />
        </div>
        <div className="formContent">
          <form className="form">
            <div className="form-group">
              <div className="logo">
                <Logo />
              </div>
              <div className="form-content">
                <div className="input-content">
                  <div className="controls">
                    <input
                      type="text"
                      name="login"
                      placeholder="Логин"
                      onChange={(e) =>
                        handleChange({
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="login">Логин</label>
                  </div>{" "}
                  <div className="controls">
                    <input
                      type="password"
                      name="parol"
                      placeholder="Пароль"
                      onChange={(e) =>
                        handleChange({
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="parol">Пароль</label>
                  </div>
                </div>
                <div className="buttons">
                  <Link to="/">Забыли пароль?</Link>
                  <button onClick={handleSubmit}>Кириш</button>
                </div>
                <p>Безопасность системы осуществлена на базе стандартов</p>
                <p>O'zDST 1105:2009 Алгоритм шифрования данных</p>
                <p>O'zDST 1192:2009 Процессы формирования и проверки ЭЦП</p>
                <p>Версия 3.0 ГУП UNICON.UZ, OOO UNICON-SOFT 2011-2018</p>
                <button className="submit">Ввод ключа</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

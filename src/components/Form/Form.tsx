import InputLabel from '@components/ui/InputLabel/InputLabel';
import useInput from '@hooks/useInput';
import { useLocation } from 'react-router-dom';

interface FormProps {
  isName: string
}

const Form = ({isName }: FormProps) => {
  const location = useLocation();
  const signUpLocation = location.pathname === '/signup'
  const {
    handleChange,
    handleBlur,
    validationMessage,
    inputValue,
    useIdInputRef,
    passwordInputRef,
    checkPasswordRef,
  } = useInput();
  return (
    <form>
     
      <InputLabel
        labelText="아이디"
        type="text"
        value={inputValue.userId}
        name='userId'
        ref={useIdInputRef}
        validate={validationMessage.userId}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputLabel
        labelText="비밀번호"
        type="password"
        value={inputValue.password}
        name='password'
        ref={passwordInputRef}
        validate={validationMessage.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isName ==='회원가입' && (
        <InputLabel
          labelText="비밀번호 재확인"
          type="password"
          value={inputValue.checkPassword}
          name='checkPassword'
          ref={checkPasswordRef}
          validate={validationMessage.checkPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </form>
  );
};

export default Form;

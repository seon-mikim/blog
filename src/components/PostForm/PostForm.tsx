import Input from '@components/ui/Input/Input'
import InputLabel from '@components/ui/InputLabel/InputLabel'
import Wrapper from '@components/ui/Wrapper/Wrapper'


const PostForm = () => {
	return (
		<form className='form'>
			<Wrapper className='form__block'>
				<InputLabel className='form__title' value={ } labelText='제목' name='title' onChange={} onBlur={} />
			</Wrapper>
			<Wrapper className='form__block'>
				<InputLabel className='' value={ } labelText='제목' name='title' onChange={} onBlur={} />
			</Wrapper>
		</form>
	)
}

export default PostForm
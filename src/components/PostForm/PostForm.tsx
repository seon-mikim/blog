import Button from '@components/ui/Button/Button';
import InputLabel from '@components/ui/InputLabel/InputLabel';
import Textarea from '@components/ui/Textarea/Textarea';
import Wrapper from '@components/ui/Wrapper/Wrapper';
import { useState, ChangeEvent, useRef, ForwardedRef, FocusEvent } from 'react';

const PostForm = () => {
  const titleInputRef = useRef(null);
  const summaryInputRef = useRef(null);
  const contentRef = useRef(null);

  const validateValue = () => {};
  const [postFormData, setPostFormData] = useState({
    title: '',
    summary: '',
    content: '',
  });

  const handlePostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };
  const handlePostTextareaChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };

  const handlePostBlur = (
    event: FocusEvent<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    if (typeof ref === 'object' && ref?.current) {
    }
	};
	
	const handleFormSubmit = (event:FocusEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(postFormData)
		setPostFormData({
      title: '',
      summary: '',
      content: '',
    });
	}
	  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <Wrapper className="form__block">
        <InputLabel
          className="form__title"
          value={postFormData.title}
          labelText="제목"
          name="title"
          type="text"
          onChange={handlePostChange}
          onBlur={handlePostBlur}
          ref={titleInputRef}
        />
      </Wrapper>
      <Wrapper className="form__block">
        <InputLabel
          className="form__summary"
          value={postFormData.summary}
          labelText="요약"
          type="text"
          name="summary"
          onChange={handlePostChange}
          onBlur={handlePostBlur}
          ref={summaryInputRef}
        />
      </Wrapper>
			<Textarea
				labelText='내용'
        content={postFormData.content}
        onChange={handlePostTextareaChange}
      />
      <Wrapper className="form__block">
        <Button
          name="postButton"
          buttonName="제출하기"
          className="form__btn--submit"
        />
      </Wrapper>
    </form>
  );
};

export default PostForm;

import Link from "next/link";

import Data from "../test/Data"



const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  async function generatePrompt () {
    const comm = `Create an better prompt from my propmt for gpt without any thing extra 
    here is my prompt ${post.prompt}`;
    const data=await Data(comm)
    //console.log(data);


    setPost({...post, Gprompt:data})
  }

  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea'
            
          />

          <textarea
            value={post.Gprompt}
            onChange={(e) => setGPost({ ...post, Gprompt: e.target.value })}
            placeholder='Generated Prompt will appear here'
            required
            className='form_textarea h-2'
            
          />
          
        </label>
        <button
            type='button'
            onClick={generatePrompt}
            className='px-5 py-1.5 text-sm mt-6 bg-primary-orange rounded-full text-white'
          >
            Generate 🪄
          </button>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
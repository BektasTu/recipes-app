import styled from 'styled-components'

export default function Home() {
  return (
    <div className="Home">
   <>
     <Header>Hello World</Header>
     <p>My first Next.js app</p>
   </>
    </div>
  )
}

const Header = styled.h1`
backgroundColor: red;
`
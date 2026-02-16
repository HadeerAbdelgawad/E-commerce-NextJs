import Image from 'next/image'
import logo from '../../public/logo.png'

function Logo() {

    return (
            <Image src={logo} alt="Logo" width={30} height={30} />
    )
}

export default Logo

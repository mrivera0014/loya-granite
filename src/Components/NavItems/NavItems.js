import About from '../About/About'
// import Calc from '../Calc/Calc'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'


export const NavItems = [
    {
        title: 'About Us',
        cName: 'about',
        location: About
    },
    {
        title: 'Projects',
        cName: 'projectsTab',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec aliquet ornare justo quis aliquet.Cras dui tellus, cursus at tempor vel, ornare vehicula eros.Integer scelerisque venenatis pulvinar.Praesent vel tincidunt erat.Donec rhoncus ut mi non tempor.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Quisque eu interdum elit.Nunc felis sapien, dignissim nec urna sit amet, vestibulum congue est.Nunc auctor pharetra libero vel rhoncus.Quisque efficitur lorem velit, sed posuere orci tincidunt quis.',
        location: Projects

    },
    {
        title: 'Contact Us!',
        cName: 'contact',
        location: Contact
    },


]
import './Footer.css'
import building from '../../img/bx-building 1.svg'

function Footer() {
    return (

        <footer>
            <div class="container-footer">

                <div class="container-headquarters">
                    <img src={building} />
                    <h3>SEDES</h3>
                    <p>sede 1<br />
                        sede 2<br />
                        sede 3<br />
                    </p>
                </div>
                <div class="container-headquarters">
                    <img src={building} />
                    <h3>SEDES</h3>
                    <p>sede 1<br />
                        sede 2<br />
                        sede 3<br />
                    </p>
                </div>
                <div class="container-headquarters">
                    <img src={building} />
                    <h3>SEDES</h3>
                    <p>sede 1<br/>
                    sede 2<br/>
                    sede 3<br/>
                    </p>
                </div>

            </div>
        </footer>


    );
}

export default Footer;
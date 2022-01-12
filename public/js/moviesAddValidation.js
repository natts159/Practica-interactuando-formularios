console.log('moviesAddValidation success');

const $ = id => document.getElementById(id);

const validation = (id, texto) => {
    if (!$(id).value) {
        $(id).classList.add('is-invalid')
        $(id).classList.remove('is-valid')
        $('error-' + id).innerText = texto
    } else {
        $(id).classList.remove('is-invalid')
        $(id).classList.add('is-valid')
        $('error-' + id).innerText = null
    }
}

window.addEventListener('load', () => {
    $('title').focus();


    $('title').addEventListener('blur', function () {
        validation('title', "El titulo es obligatorio")
    })

    $('rating').addEventListener('blur', function () {

        switch (true) {
            case !this.value:
                validation('rating', "El rating es obligatorio")
                break;
            case this.value < 0 || this.value > 10:
                this.classList.add('is-invalid')
                this.classList.remove('is-valid')
                $('error-rating').innerText = 'Debe ser un valor entre 1 y 10 '
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                $('error-rating').innerText = null
                break;
        }


    })

    $('awards').addEventListener('blur', function () {
        switch (true) {
            case !this.value:
                validation('awards', "Los premios son obligatorios")
                break;
            case this.value < 0 || this.value > 10:
                this.classList.add('is-invalid')
                this.classList.remove('is-valid')
                $('error-awards').innerText = 'Debe ser un valor entre 0 y 10 '
                break;

            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                $('error-awards').innerText = null
                break;
        }
    })

    $('release_date').addEventListener('blur', function () {
        validation('release_date', "La fecha de estreno es obligatoria")
    })

    $('length').addEventListener('blur', function () {
        switch (true) {
            case !this.value:
                validation('length', "La duración es obligatorio")
                break;
                case this.value < 60 || this.value > 360:
                    this.classList.add('is-invalid')
                    this.classList.remove('is-valid')
                    $('error-length').innerText = 'Debe ser un valor entre 60 y 360 '
                    break;
    
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    $('error-length').innerText = null
                    break;
        }
        
    })

    $('genre').addEventListener('blur', function () {
        validation('genre', "El género es obligatorio")
    })


    $('form-add-movies').addEventListener('submit', function (e) {
        e.preventDefault()

        let error = false;

        for (let i = 0; i < this.elements.length - 1; i++) {
           if (this.elements[i].classList.contains('is-invalid')) {
               error = true;
               $('error-msg').innerText = "Los campos señalados son obligatorios"
           }
        }

        !error && this.submit()
    })
})
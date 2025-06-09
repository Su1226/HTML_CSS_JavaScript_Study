function studentRegisterInput({type, name, onkeyup}) {

    return `
        <div>
            <input type="${type}" name="${name}" autocomplete="off" onkeyup="${onkeyup}(event)">
        </div>
    `
}

// 컨포넌트의 개념으로 재사용 한다. 
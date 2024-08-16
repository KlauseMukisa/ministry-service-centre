
function toggleStep(stepId) {
    var step = document.getElementById(stepId);
    if (step.classList.contains('d-none')) {
        step.classList.remove('d-none');
    } else {
        step.classList.add('d-none');
    }
}


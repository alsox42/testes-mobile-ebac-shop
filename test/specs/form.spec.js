
describe('Direciona para o formulário', ()=> {
    it('Click no botão para exibir o formulario', async ()=> {
        await $('~Forms').click()
        await $('~text-input').setValue('ebac cursos')
        await $('~switch').click()
        await $('~dropdown')[0]
        expect(await $('~text-input')).toBeDisplayed()
    });
});
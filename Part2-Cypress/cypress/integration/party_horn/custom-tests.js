describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {expect($el).to.have.value(75)})
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {expect($el).to.have.value(33)})
  });

  it('Horn volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {expect($el).to.have.prop('volume', 0.33)})
  });

  it('Image source changes when radio button selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#sound-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/images/party-horn.svg')})
  });

  it('Sound source changes when radio button selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3')})
  });

  describe('Volume image changes when increasing volume', () => {
    it('Level 3 at 100 Volume', () => {
      cy.get('#volume-slider').invoke('val', 100).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')})
    });
    it('Level 2 at 66 Volume', () => {
      cy.get('#volume-slider').invoke('val', 66).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')})
    });
    it('Level 1 at 33 Volume', () => {
      cy.get('#volume-slider').invoke('val', 33).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')})
    });
    it('Level 0 at 0 Volume', () => {
      cy.get('#volume-slider').invoke('val', 0).trigger('input');
      cy.get('#volume-image').then(($el) => {expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')})
    });
  });

  it('Honk button disabled when textbox is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.prop('disabled', true)})
  });

  it('Honk button disabled when textbox is non-text', () => {
    cy.get('#volume-number').clear().type('test');
    cy.get('#honk-btn').then(($el) => {expect($el).to.have.prop('disabled', true)})
  });

  it('Error displayed when textbox is out of range', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid');
  });
});

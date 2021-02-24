const formatVolumeIconPath = require("../assets/scripts/main")

describe('volume value of', () => {
    test('100 gives icon level 3', () => {
        expect(formatVolumeIconPath(100)).toContain(3);
    });
    test('66 gives icon level 2', () => {
        expect(formatVolumeIconPath(66)).toContain(2);
    });
    test('33 gives icon level 1', () => {
        expect(formatVolumeIconPath(33)).toContain(1);
    });
    test('0 gives icon level 0', () => {
        expect(formatVolumeIconPath(0)).toContain(0);
    });
});
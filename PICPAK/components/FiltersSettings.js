const colorMatrix = [
    { name: 'reset' },
    {
      name: 'brightness',
      tools: [{ type: 'number', min: 0, max: 1, standard: 0.3 }],
    },
    {
      name: 'greyscale',
      tools: [{ type: 'number', min: 0, max: 1, standard: 0.6 }],
    },
    { name: 'blackAndWhite' },
    { name: 'hue', tools: [{ type: 'number', min: 0, max: 360, standard: 180 }] },
    {
      name: 'contrast',
      tools: [{ type: 'number', min: 0, max: 1, standard: 0.8 }],
    },
    {
      name: 'saturate',
      tools: [{ type: 'number', min: 0, max: 1, standard: 0.8 }],
    },
    { name: 'desaturate' },
    { name: 'negative' },
    { name: 'sepia' },
    { name: 'technicolor', tools: [{ type: 'boolean', standard: true }] },
    { name: 'polaroid' },
    { name: 'toBGR' },
    { name: 'kodachrome', tools: [{ type: 'boolean', standard: true }] },
    { name: 'browni', tools: [{ type: 'boolean', standard: true }] },
    { name: 'vintage', tools: [{ type: 'boolean', standard: true }] },
    {
      name: 'colorTone',
      tools: [
        { type: 'number', min: 0, max: 1, standard: 0.5 },
        { type: 'number', min: 0, max: 1, standard: 0.5 },
        { type: 'color', standard: 0xff0000 },
        { type: 'color', standard: 0x000011 },
      ],
    },
    { name: 'night', tools: [{ type: 'number', min: 0, max: 1, standard: 0.5 }] },
    {
      name: 'predator',
      tools: [{ type: 'number', min: 0, max: 1, standard: 0.5 }],
    },
    { name: 'lsd' },
  ];
  

  export default colorMatrix;
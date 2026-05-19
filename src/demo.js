import Mirador from 'mirador';

import Plugin from './index';

const config = {
  catalog: [
    {
      manifestId:
        'https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb10614001_00159_u001/manifest',
      provider: 'Bavarian State Library (hOCR)',
    },
    {
      manifestId:
        'https://iiif.europeana.eu/presentation/9200396/BibliographicResource_3000118436165/manifest',
      provider: 'Europeana (Annotations)',
    },
    {
      manifestId: 'https://wellcomelibrary.org/iiif/b19956435/manifest',
      provider: 'Wellcome Library (ALTO)',
    },
    {
      manifestId: 'https://wellcomelibrary.org/iiif/b18035723/manifest',
      provider: 'Wellcome Library (ALTO)',
    },
    {
      manifestId: 'https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb00135902/manifest',
      provider: 'Bavarian State Library',
    },
    {
      manifestId: 'https://nakamura196.github.io/mirador-integration-textoverlay/manifest.json',
      provider: 'National Diet Library — Tale of Genji (vertical, ALTO)',
    },
  ],
  id: 'demo',
  window: {
    allowFullscreen: true,
    textOverlay: {
      enabled: true,
      selectable: true,
      visible: false,
    },
  },
  windows: [
    {
      manifestId: 'https://nakamura196.github.io/mirador-integration-textoverlay/manifest.json',
      view: 'single',
    },
  ],
};

Mirador.viewer(config, [...Plugin]);

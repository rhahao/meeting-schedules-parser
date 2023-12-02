import * as pathFunc from 'path';
import { readFile as readFileFunc } from 'fs/promises';
import { Language } from '../types';

import E from '../locales/en/text.json' assert { type: 'json' };
import F from '../locales/fr-FR/text.json' assert { type: 'json' };
import I from '../locales/it-IT/text.json' assert { type: 'json' };
import K from '../locales/uk-UA/text.json' assert { type: 'json' };
import MG from '../locales/mg-MG/text.json' assert { type: 'json' };
import T from '../locales/pt-BR/text.json' assert { type: 'json' };
import TND from '../locales/mg-TND/text.json' assert { type: 'json' };
import TNK from '../locales/mg-TNK/text.json' assert { type: 'json' };
import TTM from '../locales/mg-TTM/text.json' assert { type: 'json' };
import VZ from '../locales/mg-VZ/text.json' assert { type: 'json' };
import X from '../locales/de-DE/text.json' assert { type: 'json' };

declare global {
	var jw_epub_parser: { languages: Language };
	var path: typeof pathFunc;
	var readFile: typeof readFileFunc;
}

global.path = pathFunc;
global.readFile = readFileFunc;
global.jw_epub_parser = {
	languages: { E, F, I, K, MG, T, TND, TNK, TTM, VZ, X },
};

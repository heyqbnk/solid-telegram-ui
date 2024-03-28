import { classNames, isRecord } from '@tma.js/sdk';

type ModsValue = boolean | undefined | null | string;

interface CalcOptions {
  mix?: ModsValue | ModsValue[] | Record<string, any> | any;
  mods?: ModsValue | ModsValue[] | Record<string, ModsValue | ModsValue[]> | any;
}

interface Bemcn {
  /**
   * Applies passed mods to the current block or element.
   * @param mods - mods to apply.
   */
  mods(...mods: ModsValue[]): string;
  /**
   * Returns new Bemcn instance containing not block, but element.
   * @param elem - block element name.
   */
  elem(elem: string): Omit<Bemcn, 'elem'>;
  /**
   * Computes complete class names.
   * @param options - calculation options.
   */
  calc(options?: CalcOptions): string;
}

/**
 * Creates an object which is a helper to work with BEM class names.
 * @param block - block class name.
 */
export function bemcn(block: string): Bemcn {
  const withMod = (mod: any): string => {
    const v = classNames(mod);
    return v && `${block}--${v}`;
  };

  return {
    mods(...mods) {
      return classNames(mods.map((item) => {
        if (Array.isArray(item)) {
          return item.map(withMod);
        }
        if (isRecord(item)) {
          return Object.entries(item).map(([mod, v]) => v && withMod(mod));
        }
        return withMod(item);
      }));
    },
    elem(elem) {
      return bemcn(`${block}__${elem}`);
    },
    calc({ mix, mods } = {}) {
      return classNames(mix, block, this.mods(mods));
    },
  };
}

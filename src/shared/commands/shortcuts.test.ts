import { describe, expect, it } from 'vitest'
import { commandById, commands } from './commands'
import { matchShortcut, type KeyPress } from './shortcuts'

const press = (key: string, extra: Partial<KeyPress> = {}): KeyPress => ({
  key,
  ctrlKey: false,
  metaKey: false,
  altKey: false,
  shiftKey: false,
  target: document.body,
  ...extra
})

describe('command table', () => {
  it('gives every command a unique id and a unique key sequence', () => {
    expect(new Set(commands.map((c) => c.id)).size).toBe(commands.length)
    expect(new Set(commands.map((c) => c.keys.join(' '))).size).toBe(commands.length)
  })

  it('never lets a single-key command shadow the first key of a two-key jump', () => {
    const prefixes = new Set(commands.filter((c) => c.keys.length === 2).map((c) => c.keys[0]))
    const singles = commands.filter((c) => c.keys.length === 1).map((c) => c.keys[0])

    expect(singles.filter((key) => prefixes.has(key))).toEqual([])
  })
})

describe('matchShortcut', () => {
  it('waits after G and resolves the second key into a jump', () => {
    expect(matchShortcut(commands, press('g'))).toEqual({ pending: 'G' })
    expect(matchShortcut(commands, press('o'), 'G').command).toBe(commandById('go-online'))
  })

  it('treats a key after G that is not a jump as a fresh single key', () => {
    expect(matchShortcut(commands, press('j'), 'G').command).toBe(commandById('next-block'))
  })

  it('reads ? and Esc from the table', () => {
    expect(matchShortcut(commands, press('?', { shiftKey: true })).command).toBe(commandById('show-shortcuts'))
    expect(matchShortcut(commands, press('Escape')).command).toBe(commandById('leave-block'))
  })

  it('leaves Ctrl, ⌘, Alt and Shift+letter combinations to the browser', () => {
    expect(matchShortcut(commands, press('c', { ctrlKey: true }))).toEqual({})
    expect(matchShortcut(commands, press('c', { metaKey: true }))).toEqual({})
    expect(matchShortcut(commands, press('m', { altKey: true }))).toEqual({})
    expect(matchShortcut(commands, press('J', { shiftKey: true }))).toEqual({})
  })

  it('ignores keys typed into an input, a textarea or an editable area', () => {
    const input = document.createElement('input')
    const textarea = document.createElement('textarea')
    const editable = document.createElement('div')
    editable.setAttribute('contenteditable', '')

    for (const target of [input, textarea, editable]) {
      expect(matchShortcut(commands, press('j', { target }))).toEqual({})
    }
  })
})

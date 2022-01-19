;; Some custom keybindings I use

(global-set-key (kbd "C-t") 'forward-sexp)
(global-set-key (kbd "C-r") 'backward-sexp)
(global-set-key (kbd "C-u") 'previous-line)
(global-set-key (kbd "C-7") 'fixup-whitespace)
(global-set-key (kbd "C-9") 'paredit-backward-delete)

;;default to verical split panes
(setq split-height-threshold nil)
(setq split-width-threshold 50)

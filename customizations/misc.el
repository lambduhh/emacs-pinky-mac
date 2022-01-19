;; Changes all yes/no questions to y/n type
(fset 'yes-or-no-p 'y-or-n-p)

;; shell scripts
(setq-default sh-basic-offset 2)
(setq-default sh-indentation 2)

;; No need for ~ files when editing
(setq create-lockfiles nil)

;; Go straight to scratch buffer on startup
(setq inhibit-startup-message t)

;; gpg setup
(setq epg-gpg-program "gpg")
(setf epa-pinentry-mode 'loopback)

;; remap command key to meta
(setq mac-command-modifier 'meta)

;; Insert random uuid
(defun insert-random-uuid ()
  "Insert a random UUID into the buffer."
  (interactive)
  (let ((uuid (shell-command-to-string "uuidgen")))
    (insert "\"" (string-trim-right (downcase uuid)) "\"")))


;;; misc.el ends here

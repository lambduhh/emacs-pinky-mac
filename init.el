;;;;; Startup optimizations


;; see https://emacs.stackexchange.com/questions/34342/is-there-any-downside-to-setting-gc-cons-threshold-very-high-and-collecting-ga
(setq gc-cons-threshold (eval-when-compile (* 1024 1024 1024 2)))
(run-with-idle-timer 2 t (lambda () (garbage-collect)))


;; ;; https://github.com/syl20bnr/spacemacs/issues/9409
;; (setq history-length 100)
;; (put 'minibuffer-history 'history-length 50)
;; (put 'evil-ex-history 'history-length 50)
;; (put 'kill-ring 'history-length 25)


;;;;
;; Packages
;;;;

;; Define package repositories
(require 'package)
(add-to-list 'package-archives
             '("tromey" . "http://tromey.com/elpa/") t)
(add-to-list 'package-archives
             '("melpa" . "http://melpa.org/packages/") t)
(add-to-list 'package-archives
             '("melpa-stable" . "http://stable.melpa.org/packages/") t)

(add-to-list 'package-pinned-packages '(cider . "melpa-stable") t)
(add-to-list 'package-pinned-packages '(magit . "melpa-stable") t)

(unless (package-installed-p 'quelpa)
  (with-temp-buffer
    (url-insert-file-contents "https://github.com/quelpa/quelpa/raw/master/quelpa.el")
    (eval-buffer)
    (quelpa-self-upgrade)))
(quelpa
 '(quelpa-use-package
   :fetcher git
   :url "https://github.com/quelpa/quelpa-use-package.git"))
(require 'quelpa-use-package)

;; css formating package
;; (require 'css-format)


;; Load and activate emacs packages. Do this first so that the
;; packages are loaded before you start trying to modify them.
;; This also sets the load path.
(package-initialize)

;; Download the ELPA archive description if needed.
;; This informs Emacs about the latest versions of all packages, and
;; makes them available for download.
(when (not package-archive-contents)
  (package-refresh-contents))

;; Define he following variables to remove the compile-log warnings
;; when defining ido-ubiquitous
;; (defvar ido-cur-item nil)
;; (defvar ido-default-item nil)
;; (defvar ido-cur-list nil)
;; (defvar predicate nil)
;; (defvar inherit-input-method nil)

;; The packages you want installed. You can also install these
;; manually with M-x package-install
;; Add in your own as you wish:
(defvar my-packages
  '(;; makes handling lisp expressions much, much easier
    ;; Cheatsheet: http://www.emacswiki.org/emacs/PareditCheatsheet
    paredit

    ;; key bindings and code colorization for Clojure
    ;; https://github.com/clojure-emacs/clojure-mode
    clojure-mode


    ;; extra syntax highlighting for clojure
    clojure-mode-extra-font-locking

    ;; integration with a Clojure REPL
    ;; https://github.com/clojure-emacs/cider
    cider

    ;; allow ido usage in as many contexts as possible. see
    ;; customizations/navigation.el line 23 for a description
    ;; of ido
    ido-completing-read+

    ;; Enhances M-x to allow easier execution of commands. Provides
    ;; a filterable list of possible commands in the minibuffer
    ;; http://www.emacswiki.org/emacs/Smex
    smex

    ;; project navigation
    projectile

    ;; colorful parenthesis matching
    rainbow-delimiters

    ;; edit html tags like sexps
    tagedit

    ;; git integration
    magit

    ;;spacemacs-theme
    spacemacs-theme

    ;;ag
    ag

    ;;helm
    helm

    ;;company
    company
    ))


(load-theme 'spacemacs-dark t)

(dolist (p my-packages)
  (when (not (package-installed-p p))
    (package-install p)))


;;clj-kando
(require 'flycheck-clj-kondo)

;; Place downloaded elisp files in ~/.emacs.d/vendor. You'll then be able
;; to load them.
;;
;; For example, if you download yaml-mode.el to ~/.emacs.d/vendor,
;; then you can add the following code to this file:
;;
;; (require 'yaml-mode)
;; (add-to-list 'auto-mode-alist '("\\.yml$" . yaml-mode))
;;
;; Adding this code will make Emacs enter yaml mode whenever you open
;; a .yml file
(add-to-list 'load-path "~/.emacs.d/vendor")


;;;;
;; Customization
;;;;

;; Add a directory to our load path so that when you `load` things
;; below, Emacs knows where to look for the corresponding file.
(add-to-list 'load-path "~/.emacs.d/customizations")

;; Sets up exec-path-from-shell so that Emacs will use the correct
;; environment variables

(when (memq window-system '(mac ns x))
  (exec-path-from-shell-initialize))


;; These customizations make it easier for you to navigate files,
;; switch buffers, and choose options from the minibuffer.
(load "navigation.el")

;; These customizations change the way emacs looks and disable/enable
;; some user interface elements
(load "ui.el")

;; These customizations make editing a bit nicer.
(load "editing.el")
(load "clipboard.el")

;; Hard-to-categorize customizations
(load "misc.el")
(load "ljmcustom.el")


;; For editing lisps
(load "elisp-editing.el")

;; Langauage-specific
(load "setup-clojure.el")
(load "setup-javascript.el")

;; Configure Auto complete
(load "setup-auto-complete.el")

;; Configure Helm
(load "setup-helm.el")

;; cljs-style
(load "cljstyle-mode.el")

(custom-set-variables
 ;; custom-set-variables was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 '(coffee-tab-width 2)
 '(custom-safe-themes
   '("bffa9739ce0752a37d9b1eee78fc00ba159748f50dc328af4be661484848e476" "9e54a6ac0051987b4296e9276eecc5dfb67fdcd620191ee553f40a9b6d943e78" "52588047a0fe3727e3cd8a90e76d7f078c9bd62c0b246324e557dfa5112e0d0c" "0df7d797bc71667959e5a0dd7147f3ea56b095ad33cab5d280ad0e106e948693" "2047464bf6781156ebdac9e38a17b97bd2594b39cfeaab561afffcbbe19314e2" default))
 '(package-selected-packages
   '(flycheck-cstyle flycheck-clolyze flycheck-clj-kondo magit-todos matrix-client frame-purpose rainbow-identifiers tracking ov anaphora quelpa-use-package quelpa lsp-mode fira-code-mode zprint-mode ewal-spacemacs-themes spacemacs-theme csharp-mode emojify slack circe-notifications oauth use-package websocket oauth2 helm-circe circe alert xref-js2 js2-refactor js2-mode helm-cider-history helm-cider helm-projectile helm-ag cljr-helm ac-helm helm bash-completion zoom-window ag json-mode command-log-mode nov nyan-mode company-nginx nginx-mode docker-compose-mode git cmake-mode dockerfile-mode easy-jekyll markdown-mode+ jekyll-modes jinja2-mode xah-css-mode fill-column-indicator aggressive-indent company expand-region magit tagedit rainbow-delimiters projectile smex ido-completing-read+ cider clojure-mode-extra-font-locking clojure-mode paredit exec-path-from-shell))
 '(safe-local-variable-values '((cider-shadow-cljs-default-options . "app")))
 '(zoom-window-mode-line-color "DarkGreen"))

(custom-set-faces
 ;; custom-set-faces was added by Custom.
 ;; If you edit it by hand, you could mess it up, so be careful.
 ;; Your init file should contain only one such instance.
 ;; If there is more than one, they won't work right.
 )




;; workaround for fcli
;; (defvar-local company-fci-mode-on-p nil)

;; (defun company-turn-off-fci (&rest ignore)
;;   (when (boundp 'fci-mode)
;;     (setq company-fci-mode-on-p fci-mode)
;;     (when fci-mode (fci-mode -1))))

;; (defun company-maybe-turn-on-fci (&rest ignore)
;;   (when company-fci-mode-on-p (fci-mode 1)))


;; ;; company mode auto complete
;; (add-hook 'company-completion-started-hook 'company-turn-off-fci)
;; (add-hook 'company-completion-finished-hook 'company-maybe-turn-on-fci)
;; (add-hook 'company-completion-cancelled-hook 'company-maybe-turn-on-fci)

(require 'clj-refactor)

;; clj-kando for linting support
(require 'flycheck-clj-kondo)

(defun my-clojure-mode-hook ()
  (clj-refactor-mode 1))

(add-hook 'clojure-mode-hook #'my-clojure-mode-hook)
;; (add-hook 'clojure-mode-hook #'fira-code-mode)
;; (add-hook 'clojurescript-mode-hook #'fira-code-mode)
;;(add-hook 'clojurescript-mode-hook #'my-clojure-mode-hook)

;; MY STUFF

;; open recent files
(recentf-mode 1)
(setq recentf-max-menu-items 25)
(setq recentf-max-saved-items 25)
;; move sexp up
;; (defun reverse-transpose-sexps (arg)
;;   (interactive "*p")
;;   (transpose-sexps (- arg))
;;   ;; when transpose-sexps can no longer transpose, it throws an error and code
;;   ;; below this line won't be executed. So, we don't have to worry about side
;;   ;; effects of backward-sexp and forward-sexp.
;;   (backward-sexp (1+ arg))
;;   (forward-sexp 1))




;; move around windows with shift key
(windmove-default-keybindings)


;; windows+alt o

(global-set-key [C-tab] (quote next-multiframe-window))
(global-set-key "f" (quote fixup-whitespace))
(global-set-key (kbd "<C-S-up>") 'shrink-window)
(global-set-key (kbd "<C-S-down>") 'enlarge-window)
(global-set-key (kbd "<S-C-left>") 'shrink-window-horizontally)
(global-set-key (kbd "<S-C-right>") 'enlarge-window-horizontally)
(global-set-key (kbd "C-+") 'text-scale-increase)
(global-set-key (kbd "C--") 'text-scale-decrease)
; C-S-f file search
(global-set-key [33554438] (quote ag-dired))

(require 'zoom-window)
(global-set-key (kbd "C-x C-z") 'zoom-window-zoom)


(defun move-line-up ()
  "Move up the current line."
  (interactive)
  (transpose-lines 1)
  (forward-line -2)
  (indent-according-to-mode))

(defun move-line-down ()
  "Move down the current line."
  (interactive)
  (forward-line 1)
  (transpose-lines 1)
  (forward-line -1)
  (indent-according-to-mode))


;; jump to init.el
(defun jump-to-home (arg)
  (interactive "p")
  (find-file "~/.emacs.d/init.el"))


(defun smarter-move-beginning-of-line (arg)
  "Move point back to indentation of beginning of line.
Move point to the first non-whitespace character on this line.
If point is already there, move to the beginning of the line.
Effectively toggle between the first non-whitespace character and
the beginning of the line.
If ARG is not nil or 1, move forward ARG - 1 lines first.  If
point reaches the beginning or end of the buffer, stop there."
  (interactive "^p")
  (setq arg (or arg 1))
  ;; Move lines first
  (when (/= arg 1)
    (let ((line-move-visual nil))
      (forward-line (1- arg))))
  (let ((orig-point (point)))
    (back-to-indentation)
    (when (= orig-point (point))
      (move-beginning-of-line 1))))



(add-hook 'after-init-hook 'global-company-mode)
;; (global-aggressive-indent-mode 1)

;; (define-globalized-minor-mode global-fci-mode fci-mode (lambda () (fci-mode 1)))
;; (global-fci-mode 1)

(global-set-key [C-S-home] (quote jump-to-home))
(global-set-key [201326624] (quote set-mark-command))

;; C-? silver searcher
;(global-set-key "C-c p s s" 'projectile-ag)


(add-to-list 'auto-mode-alist '("\.cljs.*$" . clojurescript-mode))




(defun load-clj-keys ()
  ;;(add-hook 'clojurescript-mode )
  ;; jump to this file
  ;; hopefully automatically format clojure files
   (setq clojure-align-forms-automatically t)

  ;; eval at point C-x SPC
  (global-set-key [C-x ?\s] (quote cider-eval-sexp-at-point))
  ;; load current buffer -- C-Enter
  (global-set-key [C-return] (quote cider-load-buffer))

  ;; M-u
  (global-set-key [134217845] (quote cljr-splice-sexp-killing-backward))

  ;; inspect last result C-M-i
  (global-set-key [33554436] (quote cider-inspect-last-result))

  ;; format buffer -- C-M-'
  (global-set-key [201326631] (quote cider-format-buffer))

  ;; clojure-align
  (global-set-key [33554433] (quote clojure-align))

  ;; set bookmark M-S-f11
  (global-set-key [M-S-f11] (quote bookmark-set))

  ;; jump to bookmark
  (global-set-key [S-f11] (quote bookmark-jump))

  ;; docs
  (global-set-key "" (quote cider-doc))

  ;; bind reverse-transpose-sexp to C-S-up
  ;; (global-set-key [C-S-up] (quote reverse-transpose-sexps))

  ;; bind transpose-sexp to C-S-down
  ;; (global-set-key [C-S-down] (quote transpose-sexps))


  ;; C-S-space (eval and replace last expression)
  (global-set-key [100663328] (quote cider-eval-last-sexp-and-replace))

  ;; do the thing (eval exp) C-space
  (global-set-key [67108896] (quote cider-eval-last-sexp))

  ;; forward sexp M-]
  (global-set-key [134217821] (quote forward-sexp))

  ;; backward sexp M-[
  (global-set-key [134217819] (quote backward-sexp))

  ;; backward-up-list M-S-[
  (global-set-key [134217851] (quote paredit-backward-up))

  ;; down-list M-S-]
  (global-set-key [67108989] (quote paredit-forward-down))


  ;; recent files C-x f
  (global-set-key [24 102] (quote recentf-open-files))

  ;; jump to definition C-M-g
  (global-set-key [134217735] (quote cider-find-var))

  ;; expand region C-M-]
  (global-set-key [134217751] (quote er/expand-region))

  ;; pop back to previous location C-S-BS
  (global-set-key [C-S-backspace] (quote cider-pop-back))

  ;; tab to complete
  (global-set-key (kbd "TAB") #'company-indent-or-complete-common)

  ;; smarter move to beginning of line
  (global-set-key [1] (quote smarter-move-beginning-of-line))

  ;; C-'
  (global-set-key [67108903] (quote cider-format-buffer))

  ;; move line up M-S-up
  (global-set-key [M-S-up] (quote move-line-up))

  ;; move line down M-S-down
  (global-set-key [M-S-down] (quote move-line-down)))


;; autocomplete stuff
(add-hook 'cider-repl-mode-hook #'company-mode)
(add-hook 'cider-mode-hook #'company-mode)

;; fuzzy matching
 (add-hook 'cider-repl-mode-hook #'cider-company-enable-fuzzy-completion)
 (add-hook 'cider-mode-hook #'cider-company-enable-fuzzy-completion)

(add-hook 'clojure-mode-hook 'load-clj-keys)

(add-hook 'clojurescript-mode-hook 'load-clj-keys)
;; set mark C-S-space

;; kill this buffer
(global-set-key [C-S-f4] (quote kill-this-buffer))

;; delete stuff that's highlighted
(delete-selection-mode 1)

;; org-mode
;; (global-set-key "\C-cl" 'org-store-link)
;; (global-set-key "\C-ca" 'org-agenda)
;; (global-set-key "\C-cc" 'org-capture)
;; (global-set-key "\C-cb" 'org-switchb)


;; (setq org-todo-keywords
;;   '((sequence "TODO" "IN-PROGRESS" "WAITING" "DONE")))


(tool-bar-mode -1)

(setq tramp-default-method "ssh")

(nyan-mode 1)
(nyan-toggle-wavy-trail)


;; NOTE: to figure out how to do local-set-key or global-set-key,
;;   ..: M-x RET local-set-key RET <key-strokes> RET action
;;   ..: THEN C-x ESC ESC and copy the result from the
;;   ..: minibuffer


(defun read-only-if-symlink ()
  (if (file-symlink-p buffer-file-name)
      (progn
        (setq buffer-read-only t)
        (message "File is a symlink"))))



;; epubs reader stuff
(add-to-list 'load-path "~/.emacs.d/packages/")
(load "justify-kp.el")


(add-to-list 'auto-mode-alist '("\\.epub\\'" . nov-mode))
(defun my-nov-font-setup ()
  (face-remap-add-relative 'variable-pitch
                           :family "Liberation Serif"
                           :height 1.0))

(add-hook 'nov-mode-hook 'my-nov-font-setup)


(setq nov-text-width 80)
(global-whitespace-mode +1)

;; (setq nov-text-width t)
;; (setq visual-fill-column-center-text t)
;; (add-hook 'nov-mode-hook 'visual-line-mode)
;; (add-hook 'nov-mode-hook 'visual-fill-column-mode)


;; (require 'justify-kp)
;; (setq nov-text-width t)

;; (defun my-nov-window-configuration-change-hook ()
;;   (my-nov-post-html-render-hook)
;;   (remove-hook 'window-configuration-change-hook
;;                'my-nov-window-configuration-change-hook
;;                t))

;; (defun my-nov-post-html-render-hook ()
;;   (if (get-buffer-window)
;;       (let ((max-width (pj-line-width))
;;             buffer-read-only)
;;         (save-excursion
;;           (goto-char (point-min))
;;           (while (not (eobp))
;;             (when (not (looking-at "^[[:space:]]*$"))
;;               (goto-char (line-end-position))
;;               (when (> (shr-pixel-column) max-width)
;;                 (goto-char (line-beginning-position))
;;                 (pj-justify)))
;;             (forward-line 1))))
;;     (add-hook 'window-configuration-change-hook
;;               'my-nov-window-configuration-change-hook
;;               nil t)))

;; (add-hook 'nov-post-html-render-hook 'my-nov-post-html-render-hook)

;; org mode
(setq org-agenda-include-diary t)
(setq org-agenda-files '("~/Documents/agenda/"))
(global-set-key "a" (quote org-agenda))

;;;;; Startup optimizations

;; see https://emacs.stackexchange.com/questions/34342/is-there-any-downside-to-setting-gc-cons-threshold-very-high-and-collecting-ga
(setq gc-cons-threshold (eval-when-compile (* 1024 1024 1024 2)))
(run-with-idle-timer 2 t (lambda () (garbage-collect)))


;; ;; https://github.com/syl20bnr/spacemacs/issues/9409
;; (setq history-length 100)
;; (put 'minibuffer-history 'history-length 50)
;; (put 'evil-ex-history 'history-length 50)
;; (put 'kill-ring 'history-length 25)



(setq cider-repl-display-help-banner nil)

(set-default 'truncate-lines t)
(global-set-key "\C-c$" 'toggle-truncate-lines)
(setq truncate-partial-width-windows nil)

(setq history-delete-duplicates t)

(setq company-idle-delay nil)
(put 'upcase-region 'disabled nil)

(global-set-key [C-f4] 'kill-current-buffer)

;; elements.io and matrix server

(use-package matrix-client
  :quelpa (matrix-client :fetcher github :repo "alphapapa/matrix-client.el"
                         :files (:defaults "logo.png" "matrix-client-standalone.el.sh")))

;;magit from ram https://github.com/kriyative/emacs.d/blob/master/startup-available/01.el#L135
(defun rk--magit-setup-hook ()
  (local-unset-key [C-tab])
  (define-key magit-mode-map [C-tab] nil))

(defun rk-magit-show-refs (&optional transient)
  (interactive)
  (let ((magit-buffer-arguments '(("-s" . "-commiterdate"))))
    (magit-show-refs transient)))

(use-package magit
  :config
  (when (facep 'magit-item-highlight)
    (set-face-attribute 'magit-item-highlight nil
                        :background "lightgrey"
                        :foreground "black"))
  (when (facep 'magit-tag)
    (set-face-attribute 'magit-tag nil :foreground "black"))
  (setq magit-last-seen-setup-instructions "1.4.0")
  (add-hook 'magit-mode-hook 'rk--magit-setup-hook)
  :bind
  (:map magit-status-mode-map ("y" . rk-magit-show-refs)))

(use-package f)
(use-package magit-todos
  :config
  (add-to-list 'magit-todos-keywords-list "REVIEW"))

;; lsp clojure mode
;; (use-package lsp-mode
;;   :ensure t
;;   :hook ((clojure-mode . lsp)
;;          (clojurec-mode . lsp)
;;          (clojurescript-mode . lsp))
;;   :config
;;   ;; add paths to your local installation of project mgmt tools, like lein
;;   (setenv "PATH" (concat
;;                    "/usr/local/bin" path-separator
;;                    (getenv "PATH")))
;;   (dolist (m '(clojure-mode
;;                clojurec-mode
;;                clojurescript-mode
;;                clojurex-mode))
;;      (add-to-list 'lsp-language-id-configuration `(,m . "clojure")))
;;   (setq lsp-clojure-server-command '("bash" "-c" "clojure-lsp"))) ;; Optional: In case `clojure-lsp` is not in your PATH


;;;cljs-style
(defun cljstyle (&optional is-interactive)
  "Reformat code using cljstyle.
If region is active, reformat it; otherwise reformat entire buffer.
When called interactively, or with prefix argument IS-INTERACTIVE,
show a buffer if the formatting fails"
  (interactive)
  (let* ((p (point))
         (b (if mark-active (min p (mark)) (point-min)))
         (e (if mark-active (max p (mark)) (point-max)))
         (in-file (make-temp-file "cljstyle-in" nil ".clj"))
         (err-file (make-temp-file "cljstyle-err"))
         (output-buffer (get-buffer-create "*cljstyle-mode output*"))
         (contents (buffer-substring-no-properties b e))
         (cwd default-directory)
         (_ (with-temp-file in-file (insert contents))))

        (unwind-protect
          (let* ((error-buffer (get-buffer-create "*cljstyle-mode errors*"))
                 (retcode
                   (with-current-buffer output-buffer
                     (erase-buffer)
                     (let* ((default-directory cwd))
                           (call-process "cljstyle"
                                         in-file
                                         (list t err-file)
                                         nil
                                         "pipe")))))
                (with-current-buffer error-buffer
                  (read-only-mode 0)
                  (insert-file-contents err-file nil nil nil t)
                  (special-mode))
                (if (eq retcode 0)
                    (save-restriction
                      (delete-region b e)
                      (insert-buffer output-buffer)
                      (goto-char p))
                  (message "cljstyle applied")
                  (if is-interactive
                    (display-buffer error-buffer)
                    (message "cljstyle failed: see %s" (buffer-name error-buffer)))))
          (kill-buffer output-buffer)
          (delete-file in-file)
          (delete-file err-file))))


;;;###autoload
(define-minor-mode cljstyle-mode
  "Minor mode for reformatting Clojure code using cljstyle"
  :lighter " cljstyle"
  (if cljstyle-mode
    (add-hook 'before-save-hook 'cljstyle nil t)
    (remove-hook 'before-save-hook 'cljstyle t)))


(provide 'cljstyle-mode)

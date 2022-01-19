;;; shell-integration.el --- Sets up exec-path-from shell
;;; Commentary:

;;; Code:

;; https://github.com/purcell/exec-path-from-shell
(when (memq window-system '(mac ns))
  (setq exec-path-from-shell-variables '("PATH"
                                         "DATOMIC_USERNAME"
                                         "DATOMIC_PASSWORD"))
  (exec-path-from-shell-initialize))

(provide 'shell-integration)
;;; shell-integration.el ends here

